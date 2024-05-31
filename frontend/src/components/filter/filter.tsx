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

const Filter = ({
    values,
    placeholder,
    search,
}: {
    values: { value: string; label: string }[]
    placeholder: string
    search: string
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('')

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {selected
                        ? values.find((e) => e.value === selected)?.label
                        : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={search} />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {values?.map((e) => (
                                <CommandItem
                                    key={e.value}
                                    value={e.value}
                                    onSelect={(currentValue) => {
                                        setSelected(
                                            currentValue === selected
                                                ? ''
                                                : currentValue
                                        )
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            selected === e.value
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                    {e.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default Filter
