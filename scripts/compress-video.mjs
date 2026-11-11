/**
 * Compress generated clips for the web. Dev tooling, run once per new clip.
 *
 * Raw Higgsfield output is ~3MB for five seconds — 18MB across six slots, which
 * is more than the entire rest of the site. These are ambient plates sitting
 * behind a scrim under a navy duotone at partial opacity: nobody is studying
 * the grain, so they take a hard CRF and lose their audio track entirely
 * (every slot is muted by design anyway).
 *
 * `-movflags +faststart` moves the index to the front so playback can begin
 * before the file has finished arriving.
 *
 * Run: node scripts/compress-video.mjs
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, renameSync, unlinkSync } from "node:fs";
import path from "node:path";
import ffmpeg from "@ffmpeg-installer/ffmpeg";

const DIR = "public/media/video";
const CRF = 30; // visually fine behind a scrim; ~4x smaller than the default 23

let before = 0;
let after = 0;

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".mp4"))) {
  const src = path.join(DIR, file);
  const tmp = path.join(DIR, `.tmp-${file}`);
  before += statSync(src).size;

  execFileSync(
    ffmpeg.path,
    [
      "-y",
      "-i", src,
      "-an",                       // muted by design — drop the audio track
      "-vf", "scale=1280:-2",
      "-c:v", "libx264",
      "-preset", "slow",
      "-crf", String(CRF),
      "-pix_fmt", "yuv420p",       // required for Safari
      "-movflags", "+faststart",
      tmp,
    ],
    { stdio: "pipe" },
  );

  unlinkSync(src);
  renameSync(tmp, src);
  const size = statSync(src).size;
  after += size;
  console.log(`${file.padEnd(22)} ${(size / 1024).toFixed(0)}KB`);
}

console.log(
  `\n${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB ` +
    `(${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
);
