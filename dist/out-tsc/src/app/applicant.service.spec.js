import { TestBed, inject } from '@angular/core/testing';
import { ApplicantService } from './applicant.service';
describe('AppicantService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApplicantService]
        });
    });
    it('should be created', inject([ApplicantService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=applicant.service.spec.js.map