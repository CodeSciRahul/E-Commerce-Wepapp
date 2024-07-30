import {SmallScreenSidebar} from "@/components/SmallScreenSidebar"
import { BigScreenSidebar } from "@/components/BigScreenSidebar"
import { DropDownMenu } from "@/components/DropDown"
import { SearchBar } from "@/components/Search"
import {Main} from "@/components/Main"

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* laptop or bade screen dekhen wale sidebar */}
      <BigScreenSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center border-r gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6 bg-[#E0FBE2]">
        {/* mobile device or tablet ke liye button click krne pr sidar bar open hoga */}
        <SmallScreenSidebar/> 
         {/* searcbox */}
         <SearchBar/>
          {/* dropdown jispar click krne pr option show setting aur something else */}
          <DropDownMenu/>
        </header>
        {/* main content yaha hoga */}
        <Main /> 
      </div>
    </div>
  )
}
