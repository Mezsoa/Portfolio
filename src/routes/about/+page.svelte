<script lang="js">
	import PhotoDeck from '$lib/components/PhotoDeck.svelte';

	/** @type {{name: string, level: 'beginner' | 'intermediate' | 'advanced' | 'expert', tooltip: string, children?: any[], projects?: string[], x: number, y: number, unlocked?: boolean}[]} */
	let skillTree = [
		{
			name: 'John Gunnarsson',
			level: 'expert',
			tooltip: 'Full Stack Developer & Outdoor Enthusiast',
			x: 50, // Center position (%)
			y: 15,
			unlocked: true,
			children: [
				{
					name: 'Frontend',
					level: 'expert',
					tooltip: 'User Interface & Experience Development',
					x: 15,
					y: 35,
					unlocked: true,
					children: [
						{ name: 'HTML', level: 'expert', tooltip: 'Semantic markup and accessibility', x: 8, y: 55, unlocked: true },
						{ name: 'CSS', level: 'expert', tooltip: 'Modern styling and animations', x: 12, y: 65, unlocked: true },
						{ name: 'JavaScript', level: 'expert', tooltip: 'Interactive functionality and ES6+', x: 18, y: 60, unlocked: true },
						{ name: 'Svelte', level: 'expert', tooltip: 'Reactive UI framework', x: 22, y: 50, unlocked: true },
						{ name: 'React', level: 'advanced', tooltip: 'Component-based architecture', x: 15, y: 75, unlocked: true },
						{ name: 'Tailwind', level: 'expert', tooltip: 'Utility-first CSS framework', x: 25, y: 70, unlocked: true }
					]
				},
				{
					name: 'Backend',
					level: 'advanced',
					tooltip: 'Server-side Architecture & APIs',
					x: 85,
					y: 35,
					unlocked: true,
					children: [
						{ name: 'Node.js', level: 'advanced', tooltip: 'JavaScript runtime environment', x: 78, y: 55, unlocked: true },
						{ name: 'Express', level: 'advanced', tooltip: 'Fast web framework', x: 88, y: 60, unlocked: true },
						{ name: 'APIs', level: 'advanced', tooltip: 'RESTful and GraphQL services', x: 92, y: 50, unlocked: true },
						{ name: 'MongoDB', level: 'intermediate', tooltip: 'Document-based NoSQL database', x: 82, y: 70, unlocked: true },
						{ name: 'PostgreSQL', level: 'intermediate', tooltip: 'Relational database management', x: 75, y: 65, unlocked: true },
						{ name: 'Supabase', level: 'intermediate', tooltip: 'Open-source Firebase alternative', x: 85, y: 75, unlocked: true }
					]
				},
				{
					name: 'DevOps',
					level: 'intermediate',
					tooltip: 'Deployment & Cloud Infrastructure',
					x: 50,
					y: 50,
					unlocked: true,
					children: [
						{ name: 'Docker', level: 'intermediate', tooltip: 'Containerization platform', x: 45, y: 70, unlocked: true },
						{ name: 'AWS', level: 'intermediate', tooltip: 'Cloud computing services', x: 55, y: 75, unlocked: true },
						{ name: 'Vercel', level: 'advanced', tooltip: 'Frontend deployment platform', x: 50, y: 85, unlocked: true },
						{ name: 'Git', level: 'expert', tooltip: 'Version control system', x: 40, y: 80, unlocked: true },
						{ name: 'CI/CD', level: 'intermediate', tooltip: 'Automated deployment pipelines', x: 60, y: 80, unlocked: true }
					]
				},
				{
					name: 'Design',
					level: 'advanced',
					tooltip: 'UI/UX & Visual Design',
					x: 25,
					y: 25,
					unlocked: true,
					children: [
						{ name: 'Figma', level: 'advanced', tooltip: 'Collaborative design tool', x: 18, y: 40, unlocked: true },
						{ name: 'UI/UX', level: 'advanced', tooltip: 'User-centered design principles', x: 32, y: 35, unlocked: true },
						{ name: 'Responsive', level: 'expert', tooltip: 'Mobile-first design approach', x: 28, y: 20, unlocked: true },
						{ name: 'Prototyping', level: 'advanced', tooltip: 'Interactive design mockups', x: 35, y: 45, unlocked: true }
					]
				},
				{
					name: 'Tools',
					level: 'expert',
					tooltip: 'Development Workflow & Productivity',
					x: 75,
					y: 25,
					unlocked: true,
					children: [
						{ name: 'GitHub', level: 'expert', tooltip: 'Code collaboration platform', x: 82, y: 40, unlocked: true },
						{ name: 'Vite', level: 'advanced', tooltip: 'Fast build tool', x: 72, y: 45, unlocked: true },
						{ name: 'VS Code', level: 'expert', tooltip: 'Code editor and extensions', x: 68, y: 35, unlocked: true },
						{ name: 'Terminal', level: 'advanced', tooltip: 'Command line proficiency', x: 78, y: 20, unlocked: true }
					]
				}
			]
		}
	];

	/** @type {any} */
	let selectedNode = null;
	/** @type {any} */
	let hoveredNode = null;

	/**
	 * @param {any} node
	 */
	function selectNode(node) {
		selectedNode = selectedNode === node ? null : node;
	}

	/**
	 * @param {'beginner' | 'intermediate' | 'advanced' | 'expert'} level
	 */
	function getLevelColor(level) {
		switch (level) {
			case 'beginner': return '#fbbf24'; // yellow-400
			case 'intermediate': return '#3b82f6'; // blue-500
			case 'advanced': return '#8b5cf6'; // purple-500
			case 'expert': return '#10b981'; // green-500
			default: return '#6b7280'; // gray-500
		}
	}

	/**
	 * @param {'beginner' | 'intermediate' | 'advanced' | 'expert'} level
	 */
	function getNodeSize(level) {
		switch (level) {
			case 'beginner': return 2.5;
			case 'intermediate': return 3.5;
			case 'advanced': return 4.5;
			case 'expert': return 5.5;
			default: return 2.5;
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

<div class="mx-auto max-w-5xl px-4">
	<!-- Hero Section -->
	<div class="mb-16 flex h-full w-full flex-col items-start gap-12 py-8 md:flex-row">
		<div class="w-full md:w-1/2">
			<PhotoDeck />
		</div>
		<div class="flex-1">
			<div class="mb-6 flex-1 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
				<h2 class="mb-6 text-4xl font-bold">So, who am I?</h2>
				<p class="text-lg leading-relaxed">
					Hey! I'm a 29-year-old developer who's passionate about both technology and the great
					outdoors. When I'm not coding, you'll find me exploring nature through hiking trails,
					casting a line while fishing, or spending time with my family. I believe in staying
					active and balanced—whether that's through training, outdoor adventures, or building cool
					web applications.
				</p>
			</div>
			<div class="flex-1 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
				<p class="text-lg leading-relaxed">
					I love the intersection of creativity and logic that comes with development. It's not just
					about writing code—it's about solving puzzles, creating solutions, and helping businesses
					grow. I prefer clear communication above all, honest feedback, and building things that make a
					real difference in todays world.
				</p>
			</div>
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

	<!-- Skills Tree Section -->
	<section class="mb-16">
		<h2 class="mb-6 text-3xl font-bold">Skills & Expertise Tree</h2>
		<div class="mb-4 flex flex-wrap gap-2 text-sm">
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
				<span>Beginner</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full bg-blue-500"></div>
				<span>Intermediate</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full bg-purple-500"></div>
				<span>Advanced</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
				<span>Expert</span>
			</div>
		</div>
		
		<!-- Skill Tree Visualization -->
		<div class="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-base-200/30 via-base-300/20 to-base-200/40 p-8 backdrop-blur-md border border-base-300/30" style="height: 700px;">
			<svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
				<!-- Background Grid Pattern -->
				<defs>
					<pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
						<path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(156, 163, 175, 0.1)" stroke-width="0.1"/>
					</pattern>
				</defs>
				<rect width="100" height="100" fill="url(#grid)" />

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
						on:mouseenter={() => hoveredNode = node}
						on:mouseleave={() => hoveredNode = null}
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

						<!-- Main Node Circle -->
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
			{#if hoveredNode || selectedNode}
				{@const activeNode = hoveredNode || selectedNode}
				<div class="absolute bottom-1 left-6 right-6 w-1/2 rounded-xl bg-base-100/95 p-5 backdrop-blur-md shadow-2xl border border-base-300/50 transition-all duration-300">
					<div class="flex items-start gap-4">
						<div
							class="h-5 w-5 rounded-full flex-shrink-0 mt-0.5 shadow-lg"
							style="background-color: {getLevelColor(activeNode.level)}"
						></div>
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
			<p class="text-sm text-base-content/70 mb-2">🎮 <strong>Interactive Skill Tree</strong> - Hover over nodes to explore my expertise</p>
			<p class="text-xs text-base-content/50">Click nodes to select • Each color represents skill level • Lines show relationships</p>
		</div>
	</section>
</div>
