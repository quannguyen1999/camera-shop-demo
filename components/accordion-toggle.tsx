import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
interface AccordionToggle {
    menuHeader: React.ReactNode
    menuBody: React.ReactNode
}
export const AccordionToggle = ({
    menuHeader,
    menuBody
}: AccordionToggle) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-10 py-6 text-gray-700 text-sm hover:no-underline">{menuHeader}</AccordionTrigger>
        <AccordionContent>
          {menuBody}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
