const boxStyleArgTypes = {
  bgColor: { control: 'color' },
  padding: { control: 'text' },
  borderSize: { control: 'text' },
  borderRadius: { control: 'text' },
  borderColor: { control: 'color' },
  boxStyles: { table: { disable: true } },
} as const;

export { boxStyleArgTypes };
