import * as Accordion from "@radix-ui/react-accordion";

const MenuAccordion = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    // defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <Accordion.Trigger> Friends </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">
        Friends go here
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <Accordion.Trigger> All Users </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">
        All users go here
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default MenuAccordion;
