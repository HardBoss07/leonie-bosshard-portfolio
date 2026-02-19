interface ColorSwatchProps {
  hex: string;
  name?: string;
  labelClassName?: string;
}

const ColorSwatch = ({ hex, name, labelClassName }: ColorSwatchProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-full h-12 rounded-md shadow-sm border border-white/10"
        style={{ backgroundColor: hex }}
        title={name}
      />
      <span
        className={`text-xs font-mono ${labelClassName || "text-primary-text/60"}`}
      >
        {hex.toUpperCase()}
      </span>
    </div>
  );
};

export default ColorSwatch;
