<script lang="js">
	import PhotoDeck from '$lib/components/PhotoDeck.svelte';

	/** @type {{name: string, level: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'profile' | 'catergories', tooltip: string, children?: any[], projects?: string[], x: number, y: number, unlocked?: boolean}[]} */
	let skillTree = [
		{
			name: 'John Gunnarsson',
			level: 'profile',
			tooltip: 'Full Stack Developer & Outdoor Enthusiast',
			x: 50, // Center position (%)
			y: 15,
			unlocked: true,
			children: [
				{
					name: 'Frontend',
					level: 'catergories',
					tooltip: 'User Interface & Experience Development',
					x: 15,
					y: 35,
					unlocked: true,
					children: [
						{ name: 'HTML', level: 'intermediate', tooltip: 'Semantic markup and accessibility', x: -5, y: 55, unlocked: true },
						{ name: 'CSS', level: 'intermediate', tooltip: 'Modern styling and animations', x: -10, y: 75, unlocked: true },
						{ name: 'JavaScript', level: 'intermediate', tooltip: 'Interactive functionality and ES6+', x:8, y: 60, unlocked: true },
						{ name: 'Svelte', level: 'intermediate', tooltip: 'Reactive UI framework', x: 30, y: 50, unlocked: true },
						{ name: 'React', level: 'intermediate', tooltip: 'Component-based architecture', x: 15, y: 75, unlocked: true },
						{ name: 'Tailwind', level: 'intermediate', tooltip: 'Utility-first CSS framework', x: 25, y: 60, unlocked: true }
					]
				},
				{
					name: 'Backend',
					level: 'catergories',
					tooltip: 'Server-side Architecture & APIs',
					x: 85,
					y: 35,
					unlocked: true,
					children: [
						{ name: 'Node.js', level: 'intermediate', tooltip: 'JavaScript runtime environment', x: 68, y: 45, unlocked: true },
						{ name: 'Express', level: 'intermediate', tooltip: 'Fast web framework', x: 88, y: 90, unlocked: true },
						{ name: 'APIs', level: 'intermediate', tooltip: 'RESTful and GraphQL services', x: 102, y: 70, unlocked: true },
						{ name: 'MongoDB', level: 'intermediate', tooltip: 'Document-based NoSQL database', x: 72, y: 70, unlocked: true },
						{ name: 'PostgreSQL', level: 'intermediate', tooltip: 'Relational database management', x: 65, y: 65, unlocked: true },
						{ name: 'Supabase', level: 'intermediate', tooltip: 'Open-source Firebase alternative', x: 82, y: 55, unlocked: true },
						{ name: 'Spring Boot', level: 'intermediate', tooltip: 'Java framework for building web applications', x: 95, y: 80, unlocked: true },
						{ name: 'Java', level: 'intermediate', tooltip: 'Object-oriented programming language', x: 110, y: 65, unlocked: true }
					]
				},
				{
					name: 'DevOps',
					level: 'catergories',
					tooltip: 'Deployment & Cloud Infrastructure',
					x: 50,
					y: 50,
					unlocked: true,
					children: [
						{ name: 'Docker', level: 'implemented in projects', tooltip: 'Containerization platform', x: 36, y: 70, unlocked: true },
						{ name: 'AWS', level: 'implemented in projects', tooltip: 'Cloud computing services', x: 55, y: 75, unlocked: true },
						{ name: 'Vercel', level: 'advanced', tooltip: 'Frontend deployment platform', x: 50, y: 85, unlocked: true },
						{ name: 'Git', level: 'advanced', tooltip: 'Version control system', x: 40, y: 80, unlocked: true },
						{ name: 'CI/CD', level: 'implemented in projects', tooltip: 'Automated deployment pipelines', x: 60, y: 80, unlocked: true }
					]
				},
				{
					name: 'Design',
					level: 'catergories',
					tooltip: 'UI/UX & Visual Design',
					x: 1,
					y: 21,
					unlocked: true,
					children: [
						{ name: 'Figma', level: 'advanced', tooltip: 'Collaborative design tool', x: -20, y: 25, unlocked: true },
						{ name: 'UI/UX', level: 'advanced', tooltip: 'User-centered design principles', x: -5, y: 40, unlocked: true },
						{ name: 'Responsive', level: 'intermediate', tooltip: 'Mobile-first design approach', x: 8, y: 25, unlocked: true },
						{ name: 'Prototyping', level: 'advanced', tooltip: 'Interactive design mockups', x: -20, y: 35, unlocked: true }
					]
				},
				{
					name: 'Tools',
					level: 'catergories',
					tooltip: 'Development Workflow & Productivity',
					x: 105,
					y: 25,
					unlocked: true,
					children: [
						{ name: 'GitHub', level: 'expert', tooltip: 'Code collaboration platform', x: 108, y: 50, unlocked: true },
						{ name: 'Vite', level: 'advanced', tooltip: 'Fast build tool', x: 118, y: 45, unlocked: true },
						{ name: 'VS Code', level: 'expert', tooltip: 'Code editor and extensions', x: 95, y: 35, unlocked: true },
						{ name: 'Terminal', level: 'advanced', tooltip: 'Command line proficiency', x: 130, y: 42, unlocked: true },
						{ name: 'IntelliJ', level: 'intermediate', tooltip: 'Java IDE for building web applications', x: 105, y: 40, unlocked: true },
					]
				}
			]
		}
	];

	/** @type {any} */
	let selectedNode = null;
	/** @type {any} */
	let hoveredNode = null;
	/** @type {boolean} */
	let showInfoPanel = false;

	/**
	 * @param {any} node
	 */
	function selectNode(node) {
		if (selectedNode === node) {
			// If clicking the same node, toggle the info panel
			selectedNode = null;
			showInfoPanel = false;
		} else {
			// Select new node and show info panel
			selectedNode = node;
			showInfoPanel = true;
		}
	}

	/**
	 * @param {any} node
	 */
	function handleMouseEnter(node) {
		hoveredNode = node;
		// On desktop, show info panel on hover
		if (window.innerWidth >= 768) {
			showInfoPanel = true;
		}
	}

	/**
	 * @param {any} node
	 */
	function handleMouseLeave(node) {
		hoveredNode = null;
		// On desktop, hide info panel when not hovering (unless node is selected)
		if (window.innerWidth >= 768 && !selectedNode) {
			showInfoPanel = false;
		}
	}

	/**
	 * @param {string} skillName
	 */
	function getSkillIcon(skillName) {
		// @ts-ignore
		const iconMap = {
			'John Gunnarsson': '/images/john.png',
			'HTML': '/carousel/icons8-html-240.png',
			'CSS': '/carousel/icons8-css-240.png',
			'JavaScript': '/carousel/icons8-javascript-240.png',
			'Svelte': '/carousel/icons8-svelte-240.png',
			'React': '/carousel/icons8-react-200.png',
			'Tailwind': '/carousel/icons8-tailwind-css-240.png',
			'Node.js': '/carousel/icons8-node-js-240.png',
			'MongoDB': '/carousel/icons8-mongodb-240.png',
			'PostgreSQL': '/carousel/icons8-postgresql-240.png',
			'Supabase': '/carousel/icons8-supabase-240.png',
			'Git': '/carousel/icons8-git-240.png',
			'GitHub': '/carousel/icons8-github-250.png',
			'Figma': '/carousel/icons8-figma-240.png',
			'Java': '/carousel/icons8-java-240.png',
			'Spring Boot': '/carousel/icons8-spring-boot-240.png',
			'Vue.js': '/carousel/icons8-vue-js-256.png',
			'Shopify': '/carousel/icons8-shopify-240.png',
			'UI/UX': '/carousel/fullCircle.webp',
			'Responsive': '/carousel/responsive.webp',
			'Prototyping': '/carousel/prototyping.webp',
			'Docker': '/carousel/Docker.webp',
			'AWS': '/carousel/aws.webp',
			'Vercel': '/carousel/vercel.webp',
			'Frontend': '/carousel/frontend.webp',
			'Backend': '/carousel/backend.webp',
			'DevOps': '/carousel/devops1.webp',
			'Design': '/carousel/Design1.webp',
			'tools': '/carousel/tools.webp',
			'CI/CD': '/carousel/ci-cd.webp',
			'Vite': '/carousel/vite.webp',
			'VS Code': '/carousel/vs-code.webp',
			'Terminal': '/carousel/terminal.webp',
			'APIs': '/carousel/API.webp',
			'Express': '/carousel/express.webp',
			'Tools': '/carousel/Tools.webp',
			'IntelliJ': '/carousel/intellij.webp'
		};
		
		return iconMap[skillName] || null;
	}

	/**
	 * @param {'beginner' | 'looking into it' | 'learning'  | 'implemented in projects' | 'intermediate' | 'advanced' | 'expert' | 'profile' | 'catergories'} level
	 */
	function getLevelColor(level) {
		switch (level) {
			case 'beginner': return '#fbbf24'; // yellow-400
			case 'looking into it': return '#f97316'; // orange-500
			case 'learning': return '#f59e3b'; // amber-400
			case 'implemented in projects': return '#dc2626'; // red-600
			case 'intermediate': return '#3b82f6'; // blue-500
			case 'advanced': return '#8b5cf6'; // purple-500
			case 'expert': return '#10b981'; // green-500
			case 'profile': return '#000000'; // black-500
			case 'catergories': return '#000000'; // black-500
			default: return '#6b7280'; // gray-500
		}
	}

	/**
	 * @param {'beginner' | 'looking into it' | 'learning'  | 'implemented in projects' | 'intermediate' | 'advanced' | 'expert' | 'profile' | 'catergories'} level
	 */
	function getNodeSize(level) {
		switch (level) {
			case 'beginner': return 1.5;
			case 'looking into it': return 2.2;
			case 'learning': return 2.5;
			case 'implemented in projects': return 3.2;
			case 'intermediate': return 3.2;
			case 'advanced': return 3.5;
			case 'expert': return 3.5;
			case 'profile': return 8;
			case 'catergories': return 5.5;
			default: return 1.5;
		}
	}

	/**
	 * @param {any} parent
	 * @param {any} child
	 */
	function getConnectionPath(parent, child) {
		const x1 = parent.x;
		const y1 = parent.y;
		const x2 = child.x;
		const y2 = child.y;
		
		// Create smooth curved path
		const dx = x2 - x1;
		const dy = y2 - y1;
		const midX = x1 + dx * 0.5;
		const midY = y1 + dy * 0.3;
		
		return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
	}

	/**
	 * @param {any} node
	 * @param {any[]} allNodes
	 */
	function renderNode(node, allNodes = []) {
		allNodes.push(node);
		if (node.children) {
			node.children.forEach(/** @param {any} child */ (child) => renderNode(child, allNodes));
		}
		return allNodes;
	}

	$: allNodes = renderNode(skillTree[0], []);
	$: connections = allNodes.filter(node => node.children).flatMap(parent => 
		parent.children.map(/** @param {any} child */ (child) => ({ parent, child }))
	);
</script>

<div class="mx-auto max-w-7xl px-4">
	<!-- Hero Section -->
	<div class="mb-16 flex h-full w-full flex-col items-start gap-12 py-8 md:flex-row">
		
		<div class="flex-1">
			<div class="mb-6 flex-1 rounded-2xl bg-white/2 p-6 backdrop-blur-lg">
				<h2 class="mb-6 text-4xl font-bold">So, who am I?</h2>
				<p class="text-lg leading-relaxed">
					Hey! I'm a 29-year-old developer who's passionate about both technology and the great
					outdoors. When I'm not coding, you'll find me exploring nature through hiking trails,
					casting a line while fishing, or spending time with my family. I believe in staying
					active and balanced—whether that's through training, outdoor adventures, or building cool
					web applications.
				</p>
			</div>
			<div class="flex-1 rounded-2xl bg-white/2 p-6 backdrop-blur-lg	">
				<p class="text-lg leading-relaxed">
					I love the intersection of creativity and logic that comes with development. It's not just
					about writing code—it's about solving puzzles, creating solutions, and helping businesses
					grow. I prefer clear communication above all, honest feedback, and building things that make a
					real difference in todays world.
				</p>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<PhotoDeck />
		</div>
	</div>

	<!-- Journey Section -->
	<section class="mb-16">
		<h2 class="mb-6 text-3xl font-bold">My Journey</h2>
		<div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
			<p class="text-lg leading-relaxed">
				I've always been drawn to both technology and nature. Growing up, I spent as much time
				outdoors as I did tinkering with computers. This unique combination has shaped how I
				approach development—with both technical precision and creative problem-solving.
				<br /><br />
				My love for the outdoors keeps me grounded and brings fresh perspectives to my work. Whether
				I'm coding or conquering a new hiking trail, I'm always up for a challenge and ready to learn
				something new. I believe in continuous growth, both personally and professionally.
			</p>
		</div>
	</section>
</div>

<!-- Skills Tree Section -->
<section class="mb-16 max-w-10xl">
	
	<!-- Skill Tree Visualization -->
	<div class="relative w-full overflow-hidden  bg-gradient-to-br from-base-200/30 via-base-300/20 to-base-200/40 p-8 backdrop-blur-md border border-base-300/30" style="height: 1100px;">

		<h2 class="mb-6 text-3xl font-bold">Skills & Expertise Tree</h2>
		<div class="mb-4 flex flex-wrap gap-2 text-sm">
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #fbbf24"></div>
				<span>Beginner</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #f97316"></div>
				<span>Looking into it</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #f59e3b"></div>
				<span>Learning</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #dc2626"></div>
				<span>Implemented in projects</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #3b82f6"></div>
				<span>Intermediate</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #8b5cf6"></div>
				<span>Advanced</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full" style="background-color: #10b981"></div>
				<span>Expert</span>
			</div>
		</div>
		
		<svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
			<!-- Background Grid Pattern -->
			<!-- <defs>
				<pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
					<path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(156, 163, 175, 0.1)" stroke-width="0.1"/>
				</pattern>
			</defs>
			<rect width="100" height="100" fill="url(#grid)" /> -->

			<!-- Connection Lines -->
			{#each connections as { parent, child }}
				<path
					d={getConnectionPath(parent, child)}
					stroke="rgba(156, 163, 175, 0.6)"
					stroke-width="0.2"
					fill="none"
					class="transition-all duration-300"
					stroke-dasharray="0.5,0.5"
					opacity="0.7"
				/>
			{/each}

			<!-- Skill Nodes -->
			{#each allNodes as node}
				<g
					class="cursor-pointer transition-all duration-300 hover:scale-101"
					on:click={() => selectNode(node)}
					on:mouseenter={() => handleMouseEnter(node)}
					on:mouseleave={() => handleMouseLeave(node)}
					on:touchstart={() => selectNode(node)}
					on:touchend={() => handleMouseLeave(node)}
				>
					<!-- Node Background Glow (for selected/hovered) -->
					{#if selectedNode === node || hoveredNode === node}
						<circle
							cx={node.x}
							cy={node.y}
							r={getNodeSize(node.level) / 2 + 0.8}
							fill={getLevelColor(node.level)}
							opacity="0.4"
							class="animate-pulse"
						/>
					{/if}

					<!-- Main Node Circle with Icon or Color -->
					{#if getSkillIcon(node.name)}
						<!-- Icon-based node -->
						<defs>
							<clipPath id="circle-{node.name.replace(/\s+/g, '-')}">
								<circle cx={node.x} cy={node.y} r={getNodeSize(node.level) / 2} />
							</clipPath>
						</defs>
						<image
							href={getSkillIcon(node.name)}
							x={node.x - getNodeSize(node.level) / 2}
							y={node.y - getNodeSize(node.level) / 2}
							width={getNodeSize(node.level)}
							height={getNodeSize(node.level)}
							clip-path="url(#circle-{node.name.replace(/\s+/g, '-')})"
							class="drop-shadow-lg"
							filter="drop-shadow(0 0 0.5px rgba(0,0,0,0.3))"
						/>
					{:else}
						<!-- Color-based node for non-icon skills -->
						<circle
							cx={node.x}
							cy={node.y}
							r={getNodeSize(node.level) / 2}
							fill={getLevelColor(node.level)}
							stroke="rgba(255, 255, 255, 0.9)"
							stroke-width="0.15"
							class="drop-shadow-lg"
							filter="drop-shadow(0 0 0.5px rgba(0,0,0,0.3))"
						/>
					{/if}

					<!-- Node Label -->
					<text
						x={node.x}
						y={node.y + getNodeSize(node.level) / 2 + 1.8}
						text-anchor="middle"
						class="fill-current font-semibold"
						style="font-size: {node.name === 'John Gunnarsson' ? '0.9px' : '0.65px'}; filter: drop-shadow(0 0 0.2px rgba(0,0,0,0.8));"
					>
						{node.name}
					</text>
				</g>
			{/each}
		</svg>

		<!-- Tooltip/Info Panel -->
		{#if showInfoPanel}
			{@const activeNode = hoveredNode || selectedNode}
			<div class="absolute bottom-1 left-6 right-6 w-[40%] rounded-xl bg-base-100/95 p-5 backdrop-blur-md shadow-2xl border border-base-300/50 transition-all duration-300">
				<div class="flex items-start gap-4">
					{#if getSkillIcon(activeNode.name)}
						<img
							src={getSkillIcon(activeNode.name)}
							alt="{activeNode.name} icon"
							class="h-8 w-8 flex-shrink-0 mt-0.5 shadow-lg rounded-lg"
						/>
					{:else}
						<div
							class="h-5 w-5 rounded-full flex-shrink-0 mt-0.5 shadow-lg"
							style="background-color: {getLevelColor(activeNode.level)}"
						></div>
					{/if}
					<div class="flex-1">
						<h3 class="text-xl font-bold text-base-content">{activeNode.name}</h3>
						<p class="text-sm text-base-content/80 mt-1 leading-relaxed">{activeNode.tooltip}</p>
						<div class="mt-3 flex items-center gap-2">
							<span class="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
								{activeNode.level.charAt(0).toUpperCase() + activeNode.level.slice(1)} Level
							</span>
							{#if activeNode.children}
								<span class="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
									{activeNode.children.length} Skills
								</span>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Interactive Instructions -->
	<div class="mt-6 text-center">
		<p class="text-sm text-base-content/70 mb-2">🎮 <strong>Interactive Skill Tree</strong> - Explore my expertise</p>
		<p class="text-xs text-base-content/50">Desktop: Hover to preview • Mobile: Tap to select • Click again to close • Each color represents skill level</p>
	</div>
</section>
