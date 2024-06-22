import classNames from 'classnames'

interface TextProps {
  content: string | React.ReactNode
  style: string
  tag: keyof JSX.IntrinsicElements
  className?: string
}

const styles: { [key: string]: string } = {
  'copy-1': 'text-base font-normal',
  'copy-2': 'text-xl font-normal',
}


export default function Text({ content, style, tag: Tag, className }: TextProps) {
  return (
    <Tag className={classNames([styles[style], '', className])}>
      {content}
    </Tag>
  )
}