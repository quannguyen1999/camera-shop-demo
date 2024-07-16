import { parseISO, format } from 'date-fns';
import { Dancing_Script } from 'next/font/google';

export const formatISOStringToDate = (isoString: string): string => {
  // Parse the ISO date string to a Date object
  const parsedDate = parseISO(isoString);

  // Format the parsed Date object to the desired format
  return format(parsedDate, 'dd-MM-yyyy HH:mm');
};

export const formatNumberToCurrency = (number?: number) => {
  if(number == undefined){
    return 0;
  }
  return new Intl.NumberFormat('de-DE').format(number) + ' đ';
}

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});