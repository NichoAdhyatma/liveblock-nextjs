import { Presence } from "@/liveblocks.config";
import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

type Props = {
  color: string;
  presence: Presence;
};

function Cursor({ color, presence }: Props) {
  const { cursor, message } = presence;

  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor?.x}px) translateY(${cursor?.y}px)`,
      }}
    >
      <CursorSVG color={color} />

      {message && (
        <div className="absolute left-2 top-5 rounded-3xl px-4 py-2" style={{ backgroundColor: color }}>
          <p className="text-white whitespace-nowrap text-sm leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  );
}

export default Cursor;
