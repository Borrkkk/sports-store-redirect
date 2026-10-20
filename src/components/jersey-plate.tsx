export function JerseyPlate({
  id,
  note,
  compact = false,
}: {
  id: string;
  note: string;
  compact?: boolean;
}) {
  const archId = `${id}-arch`;

  return (
    <figure
      className={
        compact
          ? "w-full max-w-[16rem] bg-white text-sign-deep shadow-[8px_8px_0_0_#c5222a]"
          : "w-full max-w-sm bg-white text-sign-deep shadow-[10px_10px_0_0_#efeae1]"
      }
    >
      <svg viewBox="0 0 360 250" className="w-full" role="img" aria-label="Jersey back reading Your Name, number 00">
        <path id={archId} d="M46 86 Q180 18 314 86" fill="none" />
        <text
          fill="#071533"
          fontSize="20"
          letterSpacing="3.5"
          fontFamily="var(--font-geist-sans), sans-serif"
          fontWeight="650"
        >
          <textPath href={`#${archId}`} startOffset="50%" textAnchor="middle">
            YOUR NAME
          </textPath>
        </text>
        <text
          x="180"
          y="198"
          textAnchor="middle"
          fill="#071533"
          fontSize="112"
          fontFamily="var(--font-fraunces), Georgia, serif"
        >
          00
        </text>
      </svg>
      <figcaption className="border-t border-dashed border-maple px-4 py-3 text-center text-[11px] font-semibold tracking-[0.18em] text-sign-deep uppercase">
        {note}
      </figcaption>
    </figure>
  );
}
