// revalidation handler example 
export default async function handler(req, res) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        await res.revalidate('/path-to-revalidate')
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send('Error revalidating token')
    }
}


// getStaticProps example
export async function getStaticProps() {

    const res = await fetch('https://blablabla/posts')
    const posts = await res.json()

    if(!res.ok) {
        throw new Error(`Failed to fetch posts, received status ${res.status}`)
    }

    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}