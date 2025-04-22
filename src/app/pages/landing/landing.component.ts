import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CourseContentComponent } from '../../components/course-content/course-content.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

@Component({
  selector: 'app-landing',
  imports: [HeroSectionComponent,
    CourseContentComponent,
    PricingComponent,
    ReviewsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
