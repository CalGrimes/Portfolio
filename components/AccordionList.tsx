// AccordionList.tsx
import * as React from 'react'
import { Accordion, Box } from '@chakra-ui/react'

type Item = {
  title: string;
  content: string;
}

type AccordionListProps = {
  items: Item[];
}


export const AccordionList = ({ items }: AccordionListProps) => {
  return (
    <Accordion.Root collapsible className={`rounded-xl p-2 shadow-xl dark:shadow-none`}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={String(index)}>
          <h2>
            <Accordion.ItemTrigger className='md:hover:scale-105 ease-in duration-75'>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' className='p-2'>
                <p className='px-2 inline-block'>{item.title}</p>
              </Box>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </h2>
          <Accordion.ItemContent className='ml-2 px-2 rounded text-justify'>
            {item.content}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
