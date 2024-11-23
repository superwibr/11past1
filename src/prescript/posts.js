const padding = 20;
const animateAd = document.querySelector("#animatead");

const posts = [
	{
		name: "Gérard Girard",
		profile: "https://via.placeholder.com/40",
		content: "I buy a new bus. Very good.",
		imageEmbed: "https://via.placeholder.com/300",
		isAd: false,
		likes: 120,
		reposts: 30
	},
	{
		name: "Lysent Ent.",
		profile: "https://via.placeholder.com/40",
		content: "New district home subscriptions out now for 1 to 6 occupants!",
		imageEmbed: "https://via.placeholder.com/300",
		isAd: true,
		likes: 20,
		reposts: 5
	},
	{
		name: "Squebouille",
		profile: "https://via.placeholder.com/40",
		content: "Enjoying the sunset 🌅",
		imageEmbed: "",
		isAd: false,
		likes: 80,
		reposts: 15
	}
];

for (let i = posts.length - 1; i <= padding; i++) {
	posts.push({
		name: "Anonymous",
		profile: "https://via.placeholder.com/40",
		content: `[M4#${i.toString().padStart(3, "0")}]`,
		imageEmbed: "https://via.placeholder.com/200",
		isAd: false,
		likes: "[M5#512]",
		reposts: "[M5#256]"
	});
}

const postsContainer = document.getElementById('posts-container');

function renderPosts() {
	//postsContainer.innerHTML = '';
	posts.forEach((post, index) => {
		const postElement = document.createElement('div');
		postElement.classList.add('post');

		let sponsoredHeader = '';
		if (post.isAd) {
			sponsoredHeader = `
		<div class="sponsored">
			Sponsored 
			<a href="#" onclick="closePost(${index})">X Close</a>
		</div>`;
		}

		postElement.innerHTML = `
	${sponsoredHeader}
	<div class="post-header">
		<img src="${post.profile}" alt="${post.name}">
		<span>${post.name}</span>
	</div>
	<div class="post-content">
		<p>${post.content}</p>
		${post.imageEmbed ? `<img src="${post.imageEmbed}" alt="Post Image">` : ''}
	</div>
	<div class="post-footer">
		<span>${post.likes} Likes</span>
		<span>${post.reposts} Reposts</span>
	</div>
`;
		postsContainer.insertBefore(postElement, animateAd);
	});
}

function closePost(index) {
	posts.splice(index, 1);
	renderPosts();
}

renderPosts();