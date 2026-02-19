import ColorSwatch from "./ColorSwatch";

interface Color {
  hex: string;
  name?: string;
}

interface VisualIdentityProps {
  title?: string;
  colors: Color[];
}

const VisualIdentity = ({ 
  title = "Visual Identity", 
  colors 
}: VisualIdentityProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {colors.map((color) => (
            <ColorSwatch 
              key={color.hex} 
              hex={color.hex} 
              name={color.name} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualIdentity;