type formatNumberProps = {
  number: number;
};

export default function FormatNumber({ number }: formatNumberProps) {
  const formattedNumber = number.toString().padStart(2, "0");
  return formattedNumber;
}
