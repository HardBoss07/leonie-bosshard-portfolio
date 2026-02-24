interface PromiseProps {
  prefix: string;
  suffix: string;
  textColor: string;
  accentColor: string; // Used for "The Promise" title
  highlightColor: string; // Used for the suffix span
}

export const Promise = ({
  prefix,
  suffix,
  textColor,
  accentColor,
  highlightColor,
}: PromiseProps) => {
  return (
    <div className="my-16 w-full p-10 rounded-2xl border border-[#7A5A5A]/30 bg-[#7A5A5A]/5 backdrop-blur-sm text-center">
      <h3
        className="text-sm font-bold mb-4 uppercase tracking-[0.3em]"
        style={{ color: accentColor }}
      >
        The Promise
      </h3>
      <p
        className="text-center-no-justify text-3xl md:text-4xl font-medium leading-relaxed"
        style={{ color: textColor }}
      >
        {prefix} <br className="hidden md:block" />
        <span style={{ color: highlightColor }}>{suffix}</span>
      </p>
    </div>
  );
};
