import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Web Consultation and Development Services - Devsri"}
                </title>
            </Head>
        </>
    )
}

export default PageHead