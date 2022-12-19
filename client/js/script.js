

const initSite = async () => {
    const slug = getUrlParams()
    fetchSpecProfile(slug)
}


const getUrlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slug = urlParams.get('profile')
    return slug
}

const fetchSpecProfile =  async (slug) => {
    const res = await fetch(`/user/getSlug/${slug}`)
    const test = await res.json()
    console.log(test)
}


window.addEventListener('load', initSite)