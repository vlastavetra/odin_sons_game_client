'use client'

import { useState, useEffect, useRef } from 'react'
import Button from '@/components/elements/button.element'
import NavigationDropdown from './dropdown.navigation'

export default function Navigation({ content, type, icon }:
	{ content?: any, type: string, icon: any }) {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen])

	return (
		<div className='relative' ref={dropdownRef}>
			<Button style='iconOnly' tag='button' icon={icon} onClick={toggleDropdown} />
			{isOpen && <NavigationDropdown content={content} type={type} />}
		</div>
	)
}