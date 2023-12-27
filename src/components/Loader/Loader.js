const productsLoader = async() => {
    const categoriesLoader = await fetch('../../../public/categories.json')
    const categories = await categoriesLoader.json()

    const jobsLoader = await fetch('../../../public/jobs.json')
    const jobs = await jobsLoader.json()

    return {categories,jobs}
}

export default productsLoader;