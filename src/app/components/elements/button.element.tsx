import classNames from 'classnames'
import Link from 'next/link'
import * as IconSvg from '@/components/elements/icon.element'

interface TextProps {
  content?: string | React.ReactNode | JSX.Element
  style: string
  tag: keyof JSX.IntrinsicElements | 'link'
  link?: string
  icon?: keyof typeof IconSvg
  onClick?: any
  className?: string
}

const styles: { [key: string]: string } = {
  'iconOnly': 'px-4 py-2 bg-d-dark-gray text-white flex items-center justify-center w-[60px] h-[60px] rounded-md',
  'iconText': 'hover:bg-d-dark-gray text-white text-xl flex items-center justify-start gap-3 rounded-md',
}


export default function Button({ content, style, tag: Tag, icon, link, onClick, className }: TextProps) {
  const IconComponent = icon ? IconSvg[icon] : null
  return (
    Tag === 'link' && link ?
      <Link href={link} className={classNames([styles[style], className])}>
        {IconComponent && <IconComponent />}
        {content}
      </Link> :
      <Tag className={classNames([styles[style], 'cursor-pointer', className])} onClick={onClick}>
        {IconComponent && <IconComponent />}
        {content}
      </Tag>
  )
}
