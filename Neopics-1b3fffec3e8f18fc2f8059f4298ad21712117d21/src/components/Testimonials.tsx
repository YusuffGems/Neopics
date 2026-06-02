import { useEffect } from "react"; 
export function Testimonials() { 
useEffect(() => { 
// Load Elfsight script 
const script = document.createElement("script"); 
script.src = "https://elfsightcdn.com/platform.js"; 
script.async = true; 
document.body.appendChild(script); 
return () => { 
document.body.removeChild(script); 
}; 
}, []); 
return ( 
<section 
id="testimonials" 
className="py-24 md:py-32 px-6 md:px-10" 
> 
<div className="max-w-6xl mx-auto text-center"> 
{/* Heading */} 
<span className="text-[10px] uppercase tracking-[0.4em] text-accent"> 
Google Reviews 
</span> 
<h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12"> 
What Clients Say 
</h2> 
{/* Elfsight Google Reviews Widget */} 
<div 
className="elfsight-app-5e864c27-1b39-43db-b142-5ee1526514de" 
data-elfsight-app-lazy 
></div> 
</div> 
</section> 
); 
}
