import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherPanelsComponent } from './weather-panels.component';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WeatherPanelsComponent', () => {
    let component: WeatherPanelsComponent;
    let fixture: ComponentFixture<WeatherPanelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatExpansionModule,
                MatCardModule,
                HttpClientModule,
                BrowserAnimationsModule
            ],
            declarations: [WeatherPanelsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherPanelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
