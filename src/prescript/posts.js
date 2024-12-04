const padding = 20;
const animateAd = document.querySelector("#animatead");

const posts = [
	{
		name: "Gérard Girard",
		profile: "./media/placeholders/40x.png",
		content: "I buy a new bus. Very good.",
		imageEmbed: "./media/placeholders/300x.png",
		isAd: false,
		likes: 120,
		reposts: 30
	},
	{
		name: "Lysent Ent.",
		profile: "./media/placeholders/40x.png",
		content: "New district home subscriptions out now for 1 to 6 occupants!",
		imageEmbed: "./media/placeholders/300x.png",
		isAd: true,
		likes: 20,
		reposts: 5
	},
	{
		name: "Squebouille",
		profile: "./media/placeholders/40x.png",
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
		profile: "./media/placeholders/40x.png",
		content: `[M4#${i.toString().padStart(3, "0")}]`,
		imageEmbed: "./media/placeholders/200x.png",
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
			</div>`;

		postsContainer.insertBefore(postElement, animateAd);
	});
}

function closePost(index) {
	postsContainer.children[index].remove();
}

renderPosts();