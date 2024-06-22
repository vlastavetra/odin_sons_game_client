import classNames from 'classnames'

interface TitleProps {
  content: string
  tag: keyof JSX.IntrinsicElements
  style: string
  className?: string
}

const styles: { [key: string]: string } = {
  'title-1': 'text-4xl font-galaktika text-d-white',
  'title-2': 'text-3xl font-galaktika text-d-white',
}

export default function Title({ content, tag: Tag, style, className }: TitleProps) {
  return (
    <Tag className={classNames([styles[style], '', className])}>
      {content}
    </Tag>
  )
}