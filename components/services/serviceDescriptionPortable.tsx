export const ServiceDescriptionPortable = {
    
  block: {
    // Ex. 1: customizing common block types
    h1: ({children} : any) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({children} : any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children} : any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
    span: ({children} : any) => (
      <span className="bg-secoundary/20 px-2 py-1">{children}</span>
    ),
    li: ({children} : any) => (
      <li className="ml-1 md:ml-3">{children}</li>
    ),
    p: ({children} : any) => (
      <p className="mt-3">{children}</p>
    ),
  },
   
  }