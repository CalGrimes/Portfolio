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

  type Item = {
    title: string;
    content: string;
  }
  
  type AccordionListProps = {
    items: Item[];
  }
  

export const AccordionList = ({ items }: AccordionListProps) => {
    return (
         <Accordion allowToggle className={`rounded-xl border p-2 shadow-xl border-black dark:border-white`}>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <h2>
                    <AccordionButton className='sm:hover:scale-100 hover:scale-x-105 ease-in duration-75'>
                            <Box as="span" flex='1' textAlign='left' fontWeight='bold' className='p-2'>
                                <p className='rounded border border-xl border-black dark:bg-amber-400 bg-purple-800 text-white dark:text-black px-2 inline-block'>{item.title}</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    {/* <hr className={`rounded border my-2 border-black dark:border-white`} /> */}
                    <AccordionPanel pb={4} className='ml-2 px-2 rounded bg-gray-200 dark:bg-zinc-800 text-justify'>
                        {item.content}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>    
    )
}
