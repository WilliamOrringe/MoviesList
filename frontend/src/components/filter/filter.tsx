'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { Button } from '../ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import {
    MultiSelector,
    MultiSelectorContent,
    MultiSelectorInput,
    MultiSelectorItem,
    MultiSelectorList,
    MultiSelectorTrigger,
} from '@/components/ui/multi-select'

const Filter = ({
    values,
    heading,
    placeholder,
}: {
    values: { value: string; label: string }[]
    heading: string
    placeholder: string
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<string[]>([])

    return (
        <div>
            <div>{heading}</div>
            <MultiSelector values={selected} onValuesChange={setSelected} loop>
                <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder={placeholder} />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                    <MultiSelectorList>
                        {values.map((value, index) => (
                            <MultiSelectorItem
                                value={value.label}
                                key={value.value}
                            >
                                {value.label}
                            </MultiSelectorItem>
                        ))}
                    </MultiSelectorList>
                </MultiSelectorContent>
            </MultiSelector>
        </div>
    )
}

export default Filter
