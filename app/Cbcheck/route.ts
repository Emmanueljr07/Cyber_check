import { exec, spawn } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { url } = await request.json();
  console.log(url);
  const scriptOutputPromise = new Promise((resolve, reject) => {
    exec(`activate && python scan.py "${url}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: "${error}"`);
        reject(error);
      }
      resolve(stdout);
    });
  });

  const scriptOutput = await scriptOutputPromise;

  return NextResponse.json({ scriptOutput });
}
