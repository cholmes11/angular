import { Component, OnInit } from '@angular/core';
import { Experience} from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[];

  constructor() {
    this.experience = [
      new Experience('Software Engineer I',
        'Openet',
        'September 2017',
        'Present',
        ['Developer in the Core Engineering department, mainly working on our next-generation framework, Openet Forge.',
          'Openet Forge is the foundation microservice enablement platform for all Openet products, providing high-performance modular software which enables seamless integration, provides common functionality for custom logic and containerisation.',
          'Developed an automated migration tool, using Java and Python, which completely updated the existing automated test suite to support the configuration and runtime environments deployed by Forge.',
          'After the test migration, I worked on the stability of the migrated tests by debugging the code base, resolving edge-case test issues and developing on any code gaps, mainly in Java or C++. ' +
          'Involved in our Prometheus Stats Solution by configuring of a third-party tool, Grok Exporter, to translate our statistics into Prometheus metrics for AT&T Connected Car microservice.',
          'Aided creating and testing a proof of concept for easily deploying a Docker container which contained the Grok Exporter image which read and displayed the statistics provided.',
          'Working in an Agile environment, mainly using Kanban boards and participating in spikes while using version control software like Git and BitBucket to maintain our framework, test suites and modules.']),
      new Experience('Design Solutions Verification Engeering Intern',
        'Xilinx',
        'April 2016',
        'September 2016',
        ['Monitoring weekly regression results for design issues or bugs in Xilinx’s Vivado software.',
          'Fixing or updating designs when the regression is not a bug or crash.',
          'Detecting bugs, crashes and hangs in the Vivado software and reporting these issues via the issue tracking software, Jira.',
          'Verification of new features to be added in future software releases of Vivado.',
          'Creating automated scripts that run numerous tests in parallel.',
          'Focus testing with a small group on a specific feature of Vivado.',
          'Working efficiently on Windows and Linux.'])];
  }

  experienceSelected(experience: Experience): void {
    let selectedCompany = experience.company;
    console.log(selectedCompany + ' experience selected.');
  }

  ngOnInit() {
  }

}
