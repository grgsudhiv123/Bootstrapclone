import React from 'react'
import CopyBoxComponent from "../../.././../utils/ui/CopyBoxComponent"
const SecondComp = () => {
    const code1 = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
    `

    const code2 = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>    
    `

    const code3 = `
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    `
  return (
    <div className='mt-10'>
        <div className='w-full'>
            <h1 className='text-3xl font-medium'>Quick start</h1>
            <p className='text-md'>Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this <a href="" className="text-blue-700 underline hover:text-blue-800">Bootstrap CodePen demo.</a></p>
        </div>

        <ol className="list-decimal ml-5">
            <li className='mt-5'>
                <div className='flex flex-col gap-5'>
                    <p><span className='text-md font-bold'>Create a new <span className='text-red-700 font-medium'>index.html</span> file in your project root</span>. Include the <code className='text-red-700'>{`<meta name="viewport">`}</code> tag as well for <a href="" className="text-blue-700 underline hover:text-blue-800">proper responsive behavior</a> in mobile devices.</p>
                    <CopyBoxComponent code={code1}/>
                </div>
            </li>
            <li className='mt-5 '>
                <div className='flex flex-col gap-5'>
                    <p><span className='text-md font-bold'>Include Bootstrap’s CSS and JS.</span> Place the <span className='text-red-700 font-medium'>{`<link>`}</span> tag in the <span className='text-red-700 font-medium'>{`<head>`}</span> for our CSS, and the <span className='text-red-700 font-medium'>{`<script>`}</span> tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing <span className='text-red-700 font-medium'>{`<body>`}</span>. Learn more about our <a href="" className="text-blue-700 underline hover:text-blue-800">CDN links</a>.</p>
                    <CopyBoxComponent code={code2}/>
                    <p>You can also include Popper and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.</p>
                    <CopyBoxComponent code={code3}/>
                </div>
            </li>
            <li className='mt-5'>
               <p>Hello, world! Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own layout, adding dozens of components, and utilizing our official examples.</p> 
            </li>
        </ol>
 
    </div>
  )
}

export default SecondComp