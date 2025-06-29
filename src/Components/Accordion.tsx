import * as Accordion from "@radix-ui/react-accordion";

const MenuAccordion = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    // defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <Accordion.Trigger> Menu </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">About</Accordion.Content>
      <Accordion.Content className="AccordionContent">
        Contact Us
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default MenuAccordion;
