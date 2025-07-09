import React from "react";

function TinyCard({ text, style }: { text: string; style?: string }) {
  return (
    <p
      className={`text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit capitalize ${style}`}
    >
      {text}
    </p>
  );
}

export default TinyCard;
