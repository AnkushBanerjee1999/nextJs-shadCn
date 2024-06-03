import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Home, Menu, Package2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon"
					className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<Link href="#" className="flex items-center gap-2 text-lg font-semibold">
					<div>DT</div>
					<div className="pl-2 min-w-max">Digital Twin</div>
				</Link>
				{/* <Link href="#"
					className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
					<Home className="h-5 w-5" />
					Dashboard
				</Link> */}
			</SheetContent>
		</Sheet>
	)
}
