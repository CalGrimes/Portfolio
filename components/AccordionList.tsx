// AccordionList.tsx
import * as React from 'react'
import {useTheme} from "next-themes";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'

  type Item = {
    title: string;
    content: string;
  }
  
  type AccordionListProps = {
    items: Item[];
  }
  

export const AccordionList = ({ items }: AccordionListProps) => {
    return (
        <Accordion allowToggle className={`rounded-xl border p-3 shadow-xl hover:opacity-7 border-black dark:border-white`}>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton className='dark:hover:brightness-50 hover:opacity-70'>
                            <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <hr className={`rounded border my-2 border-gray-400 dark:border-stone-500`} />
                    <AccordionPanel pb={4}>
                        {item.content}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>    
    )
}
