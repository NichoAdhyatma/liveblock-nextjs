import { LiveCursorProps } from "@/types/type";
import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

function LiveCursors({ others }: LiveCursorProps) {
  return others.map(({ connectionId, presence }) =>
    presence?.cursor ? (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        presence={presence}
      />
    ) : null
  );
}

export default LiveCursors;
