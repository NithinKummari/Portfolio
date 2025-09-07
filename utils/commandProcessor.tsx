import React from 'react';
import { resumeData } from '../data/resumeData';
import Typewriter from '../components/Typewriter';

const renderLink = (url: string) => (
    <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan underline hover:text-terminal-text">
        {url}
    </a>
);

const Section: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="mt-2">
        <h2 className="text-[#b58900] underline">{title}</h2>
        <div className="mt-1">{children}</div>
    </div>
);

export const processCommand = (command: string): React.ReactNode => {
    const [cmd, ...args] = command.trim().toLowerCase().split(' ');

    switch (cmd) {
        case 'help':
            return (
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    <div><span className="text-[#268bd2]">about</span>       - Show career objective.</div>
                    <div><span className="text-[#268bd2]">skills</span>      - List technical skills.</div>
                    <div><span className="text-[#268bd2]">experience</span>  - Display professional experience.</div>
                    <div><span className="text-[#268bd2]">internships</span> - Display virtual internships.</div>
                    <div><span className="text-[#268bd2]">projects</span>    - Showcase key projects.</div>
                    <div><span className="text-[#268bd2]">education</span>   - Show educational background.</div>
                    <div><span className="text-[#268bd2]">certs</span>       - List certifications.</div>
                    <div><span className="text-[#268bd2]">contact</span>     - Show contact information.</div>
                    <div><span className="text-[#268bd2]">clear</span>       - Clear the terminal screen.</div>
                    <div><span className="text-[#268bd2]">all</span>         - Display the full resume.</div>
                    <div><span className="text-[#268bd2]">deploy</span>      - Guide to publish this website.</div>
                </div>
            );

        case 'about':
            return <Typewriter text={resumeData.objective} speed={5} />;

        case 'education':
            return (
                <div>
                    <div className="font-bold text-[#eee8d5]">{resumeData.education.degree}</div>
                    <div>{resumeData.education.school}</div>
                    <div className="text-[#586e75]">{resumeData.education.dates}</div>
                </div>
            );
        
        case 'skills':
            return (
                <ul className="list-disc list-inside">
                    {resumeData.skills.map(skill => (
                        <li key={skill.category}><strong className="text-[#cb4b16]">{skill.category}:</strong> {skill.details}</li>
                    ))}
                </ul>
            );
        
        case 'experience':
            return (
                <div>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-[#eee8d5] font-bold">{exp.role} @ {exp.company}</h3>
                            <p className="text-[#586e75]">{exp.dates}</p>
                            <ul className="list-disc list-inside ml-4 mt-1">
                                {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                            <p className="mt-1"><strong className="text-[#d33682]">Key Skills:</strong> {exp.skills}</p>
                        </div>
                    ))}
                </div>
            );

        case 'internships':
            return (
                <div>
                    {resumeData.virtualInternships.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-[#eee8d5] font-bold">{exp.role} - {exp.company}</h3>
                            <p className="text-[#586e75]">{exp.dates}</p>
                            <ul className="list-disc list-inside ml-4 mt-1">
                                {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                            <p className="mt-1"><strong className="text-[#d33682]">Key Skills:</strong> {exp.skills}</p>
                        </div>
                    ))}
                </div>
            );

        case 'projects':
            return (
                <div>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-[#eee8d5] font-bold">{proj.name}</h3>
                             <ul className="list-disc list-inside ml-4 mt-1">
                                {proj.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                             {proj.environment && <p className="mt-1"><strong className="text-[#d33682]">Environment:</strong> {proj.environment}</p>}
                            <p className="mt-1"><strong className="text-[#d33682]">Key Skills:</strong> {proj.skills}</p>
                        </div>
                    ))}
                </div>
            );

        case 'certs':
        case 'certifications':
             return (
                <ul className="list-disc list-inside">
                    {resumeData.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                </ul>
            );

        case 'contact':
            return (
                <ul className="list-none">
                    <li><strong className="text-[#268bd2]">Email:</strong> <a href={`mailto:${resumeData.contact.email}`} className="text-[#2aa198] underline">{resumeData.contact.email}</a></li>
                    <li><strong className="text-[#268bd2]">LinkedIn:</strong> {renderLink(resumeData.contact.linkedin)}</li>
                    <li><strong className="text-[#268bd2]">GitHub:</strong> {renderLink(resumeData.contact.github)}</li>
                    <li><strong className="text-[#268bd2]">Phone:</strong> {resumeData.contact.phone}</li>
                </ul>
            );
        
        case 'all':
             return (
                <div>
                    <Section title="Career Objective">{processCommand('about')}</Section>
                    <Section title="Education">{processCommand('education')}</Section>
                    <Section title="Technical Skills">{processCommand('skills')}</Section>
                    <Section title="Professional Experience">{processCommand('experience')}</Section>
                    <Section title="Virtual Internships & Simulations">{processCommand('internships')}</Section>
                    <Section title="Projects">{processCommand('projects')}</Section>
                    <Section title="Certifications">{processCommand('certs')}</Section>
                    <Section title="Contact">{processCommand('contact')}</Section>
                </div>
             );

        case 'deploy':
            return (
                <div>
                    <h3 className="text-[#eee8d5] font-bold">How to publish this site on GitHub Pages</h3>
                    <p className="mt-1">This portfolio is written using TypeScript and JSX, which browsers don't understand directly. It needs a "build" step to convert it into plain HTML and JavaScript.</p>
                    <p className="mt-2">Because this online editor doesn't have a standard build process (like Vite or Create React App), you can't just copy these files to GitHub Pages.</p>
                    <strong className="text-[#b58900] mt-2 block">To get this online, you would need to:</strong>
                    <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                        <li>Download the code to your local machine.</li>
                        <li>Set up a React project using a tool like Vite (`npm create vite@latest`).</li>
                        <li>Copy the components, data, and styles from this project into the new Vite project.</li>
                        <li>Run the build command (`npm run build`).</li>
                        <li>Follow a guide to deploy the resulting 'dist' folder to GitHub Pages.</li>
                    </ol>
                    <p className="mt-2">Alternatively, services like Vercel or Netlify can connect to your GitHub repo and handle the build and deployment for you, which is often easier.</p>
                </div>
            );


        default:
            return <div className="text-[#dc322f]">Command not found: '{command}'. Type 'help' for a list of available commands.</div>;
    }
};