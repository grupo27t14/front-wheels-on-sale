export interface iFormProps {
  children: React.ReactNode
  title: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  margin?: string
  padding?: string
  width?: string
}