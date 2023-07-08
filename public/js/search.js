const searchInput = document.getElementById('searchInput');
const searchForm = document.querySelector('.search-form');

const handleSearchInput = async (e) => {
    e.preventDefault();

    const skillResponse = await fetch('/api/skills/');

    if (skillResponse.ok) {
        const skillData = await skillResponse.json();
        const filteredSkills = skillData.skill.filter((skill) => {
            return (
                skill.title.toLowerCase().includes(keyword) ||
                skill.subtitle.toLowerCase().includes(keyword) ||
                skill.place.toLowerCase().includes(keyword)
            );
        });
        if(filteredSkills.length===0){
            alert('No matching skills')
        }else{
            const filteredSkillIds= filteredSkills.map((skill)=>{
                return skill.id;
            })
            const filterdResponse = await fetch('/')
        }
    } else {
        console.log('not good!')
    }
}

searchForm.addEventListener('submit', handleSearchInput);