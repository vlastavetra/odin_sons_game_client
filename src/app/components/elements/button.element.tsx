import classNames from 'classnames'
import * as IconSvg from '@/components/elements/icon.element'

interface TextProps {
  content?: string | React.ReactNode | JSX.Element
  style: string
  tag: keyof JSX.IntrinsicElements
  icon?: keyof typeof IconSvg
  onClick?: any
  className?: string
}

const styles: { [key: string]: string } = {
  'gray': 'px-4 py-2 bg-d-dark-gray text-white flex items-center justify-center w-[60px] h-[60px] rounded-md'
}


export default function Button({ content, style, tag: Tag, icon, onClick, className }: TextProps) {
  const IconComponent = icon ? IconSvg[icon] : null
  return (
    <Tag className={classNames([styles[style], 'cursor-pointer', className])} onClick={onClick}>
      {content}
      {IconComponent && <IconComponent />}
    </Tag>
  )
}