
export interface IAppProps {
    icone:React.ReactNode,
    cor:string,
    nome:string
}

export default function Tecnologia ({icone,cor,nome}: IAppProps) {
  return (
    <div style={{ color: cor }} className="flex flex-col items-center">
      {icone}
      <span className="text-[#2C444E]">{nome}</span>
    </div>
  );
}
