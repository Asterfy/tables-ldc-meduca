import { Select } from "@headlessui/react";

export function DropBox() {
  return (
    <Select name="status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  );
}
