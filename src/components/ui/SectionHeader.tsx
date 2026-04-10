import FormatNumber from "../utils/formatNumber";

type SectionHeaderProps = {
  number: number;
  sectionTitle: string;
};

export default function SectionHeader({
  number,
  sectionTitle,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-center gap-300 md:justify-start text-preset-5 lg:text-preset-5-desktop">
      <div className="text-white/25 uppercase font-bold">
        <FormatNumber number={number} />
      </div>
      <div className="uppercase">{sectionTitle}</div>
    </div>
  );
}
