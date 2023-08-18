import {Accordion, AccordionItem} from "@nextui-org/react";

const AccordionList = ({data}) => {
    return (
        <Accordion>
            {data.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default AccordionList;