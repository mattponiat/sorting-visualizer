import _ from "lodash";
import * as React from "react";
import { SortingAlgorithms } from "../../utils/types";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import {
  Box,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectLabel,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./SelectAlgorithm.style";

interface SelectProps {
  allAlgorithms: SortingAlgorithms[];
  value: SortingAlgorithms;
  setValue: (value: SortingAlgorithms) => void;
}

const SelectAlgorithm = ({ allAlgorithms, value, setValue }: SelectProps) => {
  return (
    <Box>
      <Select
        defaultValue="bubble"
        value={value}
        onValueChange={(value) => setValue(value as SortingAlgorithms)}
      >
        <SelectTrigger aria-label="Algorithms">
          <SelectValue />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Algorithms</SelectLabel>
              {allAlgorithms.map((algorithm) => (
                <SelectItem value={algorithm} key={algorithm}>
                  <SelectItemText>
                    {_.capitalize(algorithm)} Sort
                  </SelectItemText>
                  {algorithm === value && (
                    <SelectItemIndicator>
                      <CheckIcon />
                    </SelectItemIndicator>
                  )}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  );
};

export default SelectAlgorithm;
