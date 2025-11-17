Routing is next js work how we make folders and arrange them
It has a file based machanism 

Routing conventions
1. All routes must live inside the app folder
2. Route files must be named either page.js or page.tsx
3. Each folder represents a segment of the URL path

Scenerio 1 
Localhost:3000  
 |_Homepage

Scenerio 2
Localhost:3000/about
1. Create a folder "about" inside a scr/app
2. Create a "page.tsx" inside that about folder 

app
    |_ about(folder)
        |_ page.tsx


 Scenerio 3
Localhost:3000/profile
1. Create a folder "profile" inside a scr/app
2. Create a "page.tsx" inside that "profile" folder 

-----------------------------------------------------------

Creating Nested Routes : 

localhost:3000/blog/first
or
localhost:3000/blog/second

app
    |_ blog(folder)
        |_ page.tsx
            |_ first (Folder)
                |_ page.tsx
            |_ second (Folder)
                |_ page.tsx

-----------------------------------------------------------

Creating Dynamic Routes : 

localhost:3000/products/id 
eg  - : localhost:3000/products/1 -> Products 1 Details

https://ibb.co/CKBcNDvm

app
    |_ products(folder)
        |_ page.tsx
            |_ [productId] (Folder)  -> Dynamic Routing
                |_ page.tsx


-----------------------------------------------------------


Creating Nested Dynamic Routes : 

localhost:3000/products/1/reviews/1

app
    |_ products(folder)
        |_ page.tsx
            |_ [productId] (Folder)  -> Dynamic Routing
                |_ page.tsx
                |_ reviews (Folder)
                    |_ [reviewsId] (Folder)
                        |_ page.tsx

-----------------------------------------------------------









            






