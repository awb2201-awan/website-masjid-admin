import {set, type StringInputProps} from 'sanity'

export default function ColorInput(props: StringInputProps) {
  const {elementProps, onChange, schemaType, value} = props

  return (
    <input
      {...elementProps}
      aria-label={schemaType.title || 'Pilih warna'}
      className="input studio-color-picker"
      type="color"
      value={value || '#000000'}
      onChange={(event) => onChange(set(event.currentTarget.value))}
    />
  )
}
